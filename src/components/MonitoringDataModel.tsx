import { AdminEndpoints } from "@/helper";
import { Button, Input, Modal, notification } from "antd";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
interface DataProp {
  id: number;
}
const MonitoringDataModel: FC<DataProp> = ({ id }) => {
  const [loading, setLoading] = useState<boolean>(false);
  type FormValues = {
    emailAddress: string;
    userId: number;
    macAddress: string;
    ipAddress: string;
    port: number;
  };
  const { control, handleSubmit } = useForm<FormValues>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState<FormValues>();
  const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `${process.env.API_URL}${AdminEndpoints.getUserMonitoringData}${id}`
        );
        setData(res.data[0]);

        setLoading(false);
        if (res.data.length !== 1) {
          setModal(true);
        }
      };
      fetchData();
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong, refresh the page",
        duration: 2,
      });
    }
  }, [id]);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    console.log(data);
    try {
      const res = await axios.post(
        `${process.env.API_URL}${AdminEndpoints.addUserMonitoringData}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data == "Success") {
        window.location.reload();
      }
      setLoading(false);
    } catch (error) {
      notification.error({
        message: "Error",
        description: "You are not allowed to call this function",
        duration: 2,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Button className="bg-yellow-500 text-white" onClick={handleShowModal}>
        {modal ? "Add monitoring Data" : "View Monitoring Data"}{" "}
      </Button>
      <Modal
        title="Monitoring Data Modal"
        open={isModalVisible}
        onOk={handleHideModal}
        onCancel={handleHideModal}
      >
        {modal ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" i bg-center flex flex-col justify-center items-center"
          >
            <div className="pb-2">
              <label>Email Address</label>
              <br></br>
              <Controller
                name="emailAddress"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="email"
                    />
                  </>
                )}
              />
            </div>
            <div className="pb-2">
              <label>User ID</label>
              <br></br>
              <Controller
                name="userId"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="number"
                    />
                  </>
                )}
              />
            </div>
            <div className="pb-2">
              <label>MAC Address</label>
              <br></br>
              <Controller
                name="macAddress"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                    />
                  </>
                )}
              />
            </div>
            <div className="pb-2">
              <label>IP Address</label>
              <br></br>
              <Controller
                name="ipAddress"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Enter Admin Email Address"
                      type="text"
                    />
                  </>
                )}
              />
            </div>
            <div className="pb-2">
              <label>Port Number</label>
              <br></br>
              <Controller
                name="port"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="number"
                    />
                  </>
                )}
              />
            </div>

            <Button
              className="bg-orange-500 mt-6 text-white w-[200px] font-bold hover:bg-gray-500"
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Submit
            </Button>
          </form>
        ) : (
          <div className=" i bg-center flex flex-col justify-center items-center">
            <div className="pb-2">
              <label>User ID</label>
              <br></br>

              <Input
                type="number"
                value={data?.userId}
              />
            </div>
            <div className="pb-2">
              <label>MAC Address</label>
              <br></br>

              <Input
                type="text"
                value={data?.macAddress}
              />
            </div>
            <div className="pb-2">
              <label>IP Address</label>
              <br></br>

              <Input
                value={data?.ipAddress}
                type="text"
              />
            </div>
            <div className="pb-2">
              <label>Port Number</label>
              <br></br>

              <Input
                placeholder="Enter Admin Email Address"
                value={data?.port}
                type="number"
              />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MonitoringDataModel;
