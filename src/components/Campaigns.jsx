import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../store/data/actions";
import "../styles/Campaigns.css";

function Campaigns() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {data ? (
            <div className="items-container">
              {data.map((item) => (
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
    </>
  );
}

export default Campaigns;
