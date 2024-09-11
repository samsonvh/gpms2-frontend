import TableWithTabs from "@/components/pages/inspection-requests/TableWithTabs";
import { getInspectionRequestList } from "@/lib/api-calls/inspection-request";

const InspectionRequestsPage = async () => {
  
  // const inspectionRequestList = await getInspectionRequestList();
  
  return (
    <div className="tw-flex-grow tw-flex tw-flex-col tw-gap-2 tw-px-4">
      <h1 className="tw-text-xl tw-font-semibold tw-px-4">Inspection Requests</h1>
      <TableWithTabs data={[]}/>
    </div>
  );
};

export default InspectionRequestsPage;
