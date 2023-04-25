import React from "react";
import { Input } from "antd";
const UserRegistration = () => {
  return (
    <div>
      <form>
        <div>
          <label className="text-lg text-black font-bold">FirstName</label>
          <br></br>
          <Input
            type="text"
            placeholder="Enter FirstName"
            required
          />
        </div>
        <div>
          <label className="text-lg text-black font-bold">LastName</label>
          <br></br>
          <Input
            type="text"
            placeholder="Enter LastName"
            required
          />
        </div>
        <div>
              <label className="text-lg text-black font-bold">
            Latitude
              </label>
              <br></br>
              <Input
                type="text"
                
                required
              />
            </div>
      </form>
    </div>
  );
};

export default UserRegistration;
