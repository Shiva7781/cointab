import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const UserDetails = () => {
  const [usersData, setUsersData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    let mounted = false;

    axios
      .get("https://shy-red-kitten-wig.cyclic.app/userdetails")
      .then((resp) => {
        // console.log("resp:", resp.data.userdetails);

        // console.log(resp.data.userdetails[0].newResults);

        if (!mounted) {
          setUsersData(resp.data.userdetails[0].newResults);
          setDisplayData(resp.data.userdetails[0].newResults);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("err:", err);
        setLoading(false);
      });

    return () => {
      mounted = true;
    };
  }, []);

  // Pagination
  const PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(displayData.length / PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const currentPageData = displayData
    .filter((val) => {
      return (
        val.name.first.toLowerCase().includes(searchName.toLowerCase()) ||
        val.name.last.toLowerCase().includes(searchName.toLowerCase())
      );
    })
    .slice(offset, offset + PER_PAGE);

  const handlesort = (e, x) => {
    // console.log("e, x:", e.target.value, x);

    let sorted_displayData;

    if (x === "name") {
      if (e.target.value === "asc") {
        sorted_displayData = displayData.sort((a, b) => {
          return a.name.title.localeCompare(b.name.title);
        });
      } else if (e.target.value === "desc") {
        sorted_displayData = displayData.sort((a, b) => {
          return b.name.title.localeCompare(a.name.title);
        });
      } else {
        sorted_displayData = displayData;
      }
    }

    if (x === "age") {
      if (e.target.value === "asc") {
        sorted_displayData = displayData.sort((a, b) => {
          return a.dob.age - b.dob.age;
        });
      } else if (e.target.value === "desc") {
        sorted_displayData = displayData.sort((a, b) => {
          return b.dob.age - a.dob.age;
        });
      } else {
        sorted_displayData = displayData;
      }
    }

    setDisplayData([...sorted_displayData]);
  };

  const handleFilter = (e) => {
    let filtered_usersData;

    if (e.target.value === "") {
      filtered_usersData = usersData;
    } else {
      filtered_usersData = usersData.filter((v) => {
        return v.gender === e.target.value;
      });
    }
    setDisplayData([...filtered_usersData]);
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Search your name"
        />
      </div>
      <div className="Searchbtn">
        <select onChange={(e) => handlesort(e, "name")}>
          <option value="">Sort by Name</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
        <select onChange={handleFilter}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select onChange={(e) => handlesort(e, "age")}>
          <option value="">Sort by Age</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Profile </th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.length > 0 ? (
            currentPageData.map((v, i) => {
              const {
                picture,
                login,
                name,
                email,
                phone,
                gender,
                dob,
                location,
              } = v;

              return (
                <tr key={i}>
                  <td>
                    <img src={picture.large} alt="" />
                  </td>
                  <td>{login.username}</td>
                  <td>
                    {name.title} {name.first} {name.last}
                  </td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{gender}</td>
                  <td>{dob.age}</td>
                  <td>
                    {location.street.name}, {location.city}, {location.state},{" "}
                    {location.country}, {location.postcode}
                  </td>
                </tr>
              );
            })
          ) : (
            <>No record found</>
          )}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={"pagination_link_disabled"}
        activeClassName={"pagination_link_active"}
      />
    </>
  );
};

export default UserDetails;
