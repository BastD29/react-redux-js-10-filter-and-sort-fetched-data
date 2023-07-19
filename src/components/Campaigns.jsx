import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, setFilter, setSort } from "../store/actions";
import "../styles/Campaigns.css";

function Campaigns() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log("state", state);

  const data = useSelector((state) => state.data.data);
  console.log("data", data);

  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const filter = useSelector((state) => state.filter);
  const sort = useSelector((state) => state.sort);

  const filteredData =
    // prettier-ignore
    data?.filter((item) => {
      const statusMatch = filter.status === "all" || item.status === filter.status;
      const statusCodeMatch = filter.statusCode === "all" || item.statusCode === filter.statusCode;
      const statusPercentageMatch = filter.statusPercentage === "all" || item.statusPercentage === filter.statusPercentage;

      return statusMatch && statusCodeMatch && statusPercentageMatch;
    }) ?? [];
  console.log("filteredData", filteredData);

  const sortedAndFilteredData = filteredData.sort((a, b) => {
    if (sort === "asc") {
      return a.title > b.title ? 1 : -1;
    } else {
      return a.title < b.title ? 1 : -1;
    }
  });

  const handleFilterChange = (filterType) => (e) => {
    dispatch(setFilter(filterType, e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <>
      <div>
        <select onChange={handleFilterChange("status")}>
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select onChange={handleFilterChange("statusCode")}>
          <option value="all">All Codes</option>
          <option value="Code A">Code A</option>
          <option value="Code B">Code B</option>
          <option value="Code C">Code C</option>
          // Add more options as needed
        </select>

        <select onChange={handleFilterChange("statusPercentage")}>
          <option value="all">All Percentages</option>
          <option value="75%">75%</option>
          <option value="50%">50%</option>
          <option value="90%">90%</option>
          // Add more options as needed
        </select>

        <select onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div>
            {sortedAndFilteredData ? (
              <div className="items-container">
                {sortedAndFilteredData.map((item) => (
                  <div key={item.uuid} className="item-container">
                    <p>{item.title}</p>
                    <p>{item.status}</p>
                    <p>{item.statusCode}</p>
                    <p>{item.statusPercentage}</p>
                    <p>{item.dateFrom}</p>
                    <p>{item.dateTo}</p>
                    <p>{item.name}</p>
                    <p>{item.address}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No data available</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Campaigns;
