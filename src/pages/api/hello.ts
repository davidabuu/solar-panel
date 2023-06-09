// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


// const TableDataAdmin = () => {
  // interface UserData {
  //   firstName: string;
  //   lastName: string;
  //   emailAddress: string;
  //   password: string;
  //   confirmPassword: string;
  //   latitude: number;
  //   longitude: number;
  //   phoneNumber: string;
  //   isVerified: boolean;
  //   userId: number;
  // }

//   const handleMenuClick = (user: UserData, action: string) => {
//     // Handle the menu click here
//   };

//   const renderMenu = (user: UserData) => {
//     return (
//       <Menu onClick={(e) => handleMenuClick(user, e.key)}>
//         <Menu.Item key={user.userId}>View User Dashboard</Menu.Item>
//         {!user.isVerified ? (
//           <Menu.Item
//             className="menu"
//             key={user.userId}
//           >
//             {/* <VerifyUserModal key={user.userId} /> */}
//           </Menu.Item>
//         ) : (
//           ""
//         )}
//         {/* <Menu.Item key="action2">Delete User</Menu.Item> */}
//       </Menu>
//     );
//   };
  // const [data, setData] = useState<UserData[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
//   const [modal, showModal] = useState<boolean>(true);
//   const ShowModal = () => {
//     showModal(true);
//   };
  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       const res = await axios.get(
  //         `${process.env.API_URL}${AdminEndpoints.getUsers}`
  //       );
  //       setData(res.data);
  //       setLoading(false);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     notification.error({
  //       message: "Error",
  //       description: "Something went wrong, refresh the page",
  //       duration: 2,
  //     });
  //   }
  // }, []);

  // const columns = [
  //   {
  //     title: "User ID",
  //     dataIndex: "userId",
  //     key: "userId",
  //   },
  //   {
  //     title: "FirstName",
  //     dataIndex: "firstName",
  //     key: "firstName",
  //   },
  //   {
  //     title: "LastName",
  //     dataIndex: "lastName",
  //     key: "lastName",
  //   },
  //   {
  //     title: "Phone Number",
  //     dataIndex: "phoneNumber",
  //     key: "phoneNumber",
  //   },
  //   {
  //     title: "Latitude",
  //     dataIndex: "latitude",
  //     key: "latitude",
  //   },
  //   {
  //     title: "Longitude",
  //     dataIndex: "longitude",
  //     key: "longitude",
  //   },
  //   {
  //     title: "Verified",
  //     dataIndex: "isVerified",
  //     key: "isVerified",
  //     // render: (text: any) => (
  //     //   <div key={text} style={{ color: "green", fontWeight: "bolder" }}>
  //     //     {text ? (
  //     //       <Button
  //     //         type="primary"
  //     //         className=" bg-green-500 hover:bg-green-500 text-white"
  //     //       >
  //     //         Verified
  //     //       </Button>
  //     //     ) : (
  //     //       <Button
  //     //         onClick={ShowModal}
  //     //         className="bg-red-500 text-white"
  //     //       >
  //     //         Not Verified
  //     //       </Button>
  //     //     )}
  //     //   </div>
  //     // ),
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     // render: (text: string, record: UserData) => (
  //     //   <Dropdown
  //     //     key={record.userId}
  //     //     // overlay={renderMenu(record)}
  //     //     // trigger={["click"]}
  //     //     placement="bottomRight"
  //     //     arrow
  //     //   >
  //     //     <a
  //     //     key={record.userId}
  //     //       className="ant-dropdown-link"
  //     //       onClick={(e) => e.preventDefault()}
  //     //     >
  //     //       <DownOutlined />
  //     //     </a>
  //     //   </Dropdown>
  //     // ),
  //   },
  // ];

  // return (
  //   <div className="table w-[100%] px-8">
  //     <Table
  //       columns={columns}
  //       dataSource={data}
  //       loading={loading}
  //       pagination={false}
  //       rowKey={"key"}
  //       // locale={{
  //       //   emptyText: (
  //       //     <Skeleton
  //       //       active
  //       //       key={"ss"}
  //       //       paragraph={{ rows: 10 }}
  //       //     />
  //       //   ),
  //       // }}
  //     />
  //   </div>
  // );
// };
