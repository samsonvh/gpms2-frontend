export type ExtractedInformationModel = {
  id?: string;
  name?: string;
  code?: string;
};

export type BaseFilterModel = {
  orderBy: string;
  isAscending: boolean;
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
};

export type Notification = {
  id: string;
  title?: string;
  body?: string;
  time: Date | string;
  type: "newRequest" | "started" | "failed" | "passed";
};

export type BENotification = {
  id: string;
  title: string;
  body: string;
  createdDate: Date | string;
  isRead: boolean;
};
