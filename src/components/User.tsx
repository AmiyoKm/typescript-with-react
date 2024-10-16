import { ReactNode } from "react";
// type User ={
//     firstName: string;
//     lastName: string;
// }
// interface UserProps {

//   firstName: string;
//   lastName: string;
// }
interface UserChildren {

    children: ReactNode
}
const User = ({children}:UserChildren) => {
  return (
    <div className="text-9xl text-green-600">
      {children}
    </div>
  );
};

export default User;
