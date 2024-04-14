import React from "react";

const Details = ({ details }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 mt-10">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Vehicle Number
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Challan
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {details.name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {details.vehicleNumber}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {details.challan}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Details;
