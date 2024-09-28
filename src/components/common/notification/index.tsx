"use client";
import useFcmToken from "@/lib/hooks/useFCMToken";
import React, { memo, useEffect, useState } from "react";
import bellIcon from "@Public/icons/bell.svg";
import bellOutlineIcon from "@Public/icons/bell-outline.svg";
import bellNotiIcon from "@Public/icons/bell-outline-noti.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Notification } from "@/lib/types/others";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "../../../../firebase";
import { useSession } from "next-auth/react";

const NotificationSection = () => {
  const { fcmToken, notificationPermissionStatus } = useFcmToken();
  const session = useSession();

  console.log(session.data?.user?.id);
  console.log(fcmToken);

  const [focused, setFocused] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const loadNotificationsFromBE = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/notifications`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + session.data?.user?.id,
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  };

  useEffect(() => {
    if (session.data) {
      loadNotificationsFromBE();
    }
  }, [session]);

  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      if (notificationPermissionStatus === "granted") {
        const messaging = getMessaging(firebaseApp);
        const unsubscribe = onMessage(messaging, (payload) => {
          setHasNewMessage(true);
          const newNoti: Notification = {
            id: payload.messageId,
            title: payload.notification?.title,
            body: payload.notification?.body,
            type: "newRequest",
            time:
              payload.data![`google.c.a.ts`] ?? payload.data!["createdDate"],
          };
          setNotifications([...notifications, newNoti]);
          console.log("Foreground push notification received:", payload);
        });
        return () => {
          unsubscribe(); // Unsubscribe from the onMessage event on cleanup
        };
      }
    }
  }, [notificationPermissionStatus, notifications]);

  const onClickIcon = () => {
    setFocused(!focused);
    setHasNewMessage(false);
  };

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <div>
      {focused && (
        <button
          type="button"
          onClick={onClickIcon}
          className="tw-absolute tw-top-0 tw-left-0 tw-bg-slate-50 tw-opacity-20 tw-w-full tw-h-full"
        />
      )}
      <div className="tw-flex tw-relative">
        <button type="button" onClick={onClickIcon}>
          <Image
            src={
              hasNewMessage
                ? bellNotiIcon
                : focused
                ? bellIcon
                : bellOutlineIcon
            }
            alt="bellIcon"
            className="tw-w-8"
          />
        </button>
        {focused && (
          <div className="tw-absolute tw-top-full tw-right-0 tw-w-72 tw-bg-white tw-rounded-md tw-shadow-md tw-p-1 tw-pt-2">
            <p className="tw-text-lg tw-font-semibold tw-px-2 tw-py-2">
              Notifications
            </p>
            {notifications.length > 0 ? (
              <div className="tw-shadow-inner tw-p-1 tw-rounded-sm">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="tw-p-1 tw-rounded-sm hover:tw-shadow-md"
                  >
                    <p className="tw-text-sm tw-font-semibold">
                      {notification.title}
                    </p>
                    <p className="tw-text-xs tw-text-slate-500">
                      {notification.body}
                    </p>
                    <p className="tw-text-sm">
                      {new Date(
                        parseInt(notification.time as string)
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No notification</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(NotificationSection);
