import { AdminEndpoints } from "@/helper";
import { Button, Input, Modal, notification } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const VerifyUserModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  type FormValues = {
    emailAddress: string;
    userId: string;
  };
  const {
    control,
    handleSubmit
  } = useForm<FormValues>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setIsModalVisible(false);
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const res = await axios.put(
        `${process.env.API_URL}${AdminEndpoints.verifyUsers}`,
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
        description: "You are not allowed to verify users",
        duration: 2,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleShowModal}>Verify User</Button>
      <Modal
        title="Verification Modal"
        open={isModalVisible}
        onOk={handleHideModal}
        onCancel={handleHideModal}
      >
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
          <Button
            className="bg-orange-500 mt-6 text-white w-[200px] font-bold hover:bg-gray-500"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default VerifyUserModal;
