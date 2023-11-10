'use client'

export default function EditPostPage() {
   function logOut() {
     localStorage.removeItem("loggedin");
   }
  return (
    <div>
      EditPost
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}
