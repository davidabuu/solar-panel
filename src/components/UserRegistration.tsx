import { useEffect, useState } from "react";
import { Input, Button, notification } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Aos from "aos";
import { useRouter } from "next/router";
import "aos/dist/aos.css";
import { UserEndpoints } from "@/helper";
import axios from "axios";
import Link from "next/link";
import getLocation from "./GetLoaction";
import UserWebLayout from "./UserWebLayout";
function UserRegistration() {
  interface Coords {
    latitude: number;
    longitude: number;
  }

  const [location, setLocation] = useState<Coords | null>(null);

  useEffect(() => {
    getLocation().then(setLocation);
  }, []);
  console.log(location);
  type FormValues = {
    emailAddress: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    latitude: string;
    longitude: string;
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  let locationData = {
    latitude: location?.latitude,
    longitude: location?.longitude,
  };
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    let newData = {
      emailAddress: data.emailAddress,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      confirmPassword: data.confirmPassword,
      phoneNumber: data.phoneNumber,
      latitude: locationData.latitude,
      longitude: locationData.longitude,
    };
    if (data.password !== data.confirmPassword) {
      notification.error({
        message: "Error",
        description: `Password Do Not Match`,
        duration: 2,
      });
    } else {
      try {
        setLoading(true);
        const res = await axios.post(
          `${process.env.API_URL}${UserEndpoints.userRegistration}`,
          newData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data) {
          notification.success({
            message: "Success",
            description: "Registration Success, we will give you a call soon",
            duration: 5,
          });
          setLoading(false);
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: `User Already Exists with this email address ${data.emailAddress}`,
          duration: 2,
        });
        setLoading(false);
      }
    }
  };
  notification.success({
    message: "Success",
    description: "Registration Success, we will give you a call soon",
    duration: 5,
  });
  useEffect(() => {
    notification.success({
      message: "Success",
      description: "Registration Success, we will give you a call soon",
      duration: 5,
    });
    Aos.init();
  }, []);
  return (
    <UserWebLayout webtitle="User Registration">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center  img-bg items-center h-screen bg-cover bg-center"
      >
        <div
          data-aos="fade-right"
          className="flex flex-col  items-center h-max w-max px-8 bg-white rounded-lg shadow-md"
        >
          <h1 className="text-2xl py-4">USER REGISTRATION</h1>
          <div className="flex flex-col  lg:flex-row lg:justify-evenly">
            <div className="py-2 mr-2  ">
              <label className="block">First Name</label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                    />
                    {errors.firstName && (
                      <span className="text-red-500">
                        {errors.firstName.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="py-2 mr-2 ">
              <label className="block">Last Name</label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                    />
                    {errors.lastName && (
                      <span className="text-red-500">
                        {errors.lastName.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="py-2 mr-2 ">
              <label className="block">Email Address</label>
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
                    {errors.emailAddress && (
                      <span className="text-red-500">
                        {errors.emailAddress.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="py-2 mr-2 ">
              <label className="block">Phone Number</label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="py-2 mr-2 ">
              <label className="block">Password</label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="password"
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
            <div className="py-2 mr-2 ">
              <label className="block">Confirm Password</label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="password"
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="pb-2 mr-2 ">
              <label>Latitude</label>
              <br></br>

              <Input
                type="text"
                value={location?.latitude}
              />
            </div>
            <div className="pb-2 mr-2 ">
              <label>Longitude</label>
              <br></br>
              <Controller
                name="latitude"
                control={control}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                      value={location?.longitude}
                    />
                  </>
                )}
              />
            </div>
          </div>
          <Button
            className="bg-orange-500 mt-6 text-white w-[200px] font-bold hover:bg-gray-500"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            REGISTER
          </Button>
          <div className="pt-2 hover:text-blue-400">
            <Link href="/login">
              <p> Already have an account? Login</p>
            </Link>
          </div>
        </div>
      </form>
    </UserWebLayout>
  );
}
export default UserRegistration;
