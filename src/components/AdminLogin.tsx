import { useEffect } from "react";
import { Input, Button } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Aos from "aos";
import "aos/dist/aos.css";
function AdminLogin() {
  type FormValues = {
    emailAddress: string;
    adminCode: string;
    name: string;
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  console.log(errors);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" img-bg bg-cover bg-center flex flex-col justify-center items-center h-screen"
    >
      <div
        data-aos="fade-right"
        className="flex flex-col pt-16 sm:w-[50%] w-[70%] lg:w-[30%]  rounded-lg items-center h-[50%] bg-white  shadow-md "
        style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;" }}
      >
        <h1 className="text-2xl pb-4">ADMIN LOGIN</h1>
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
                <br></br>
                {errors.emailAddress && (
                  <span style={{ color: "red" }}>
                    {errors.emailAddress.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <Controller
            name="adminCode"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }: any) => (
              <>
                <Input
                  {...field}
                  type="password"
                />
                <br></br>
                {errors.adminCode && (
                  <span style={{ color: "red" }}>
                    {errors.adminCode.message}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <Button
          className="bg-orange-500 mt-6 text-white w-[200px] font-bold hover:bg-gray-500"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
export default AdminLogin;
