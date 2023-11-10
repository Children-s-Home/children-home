'use client'

export default function DashboardPage() {
  function logOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <div>Dashboard
      <button onClick={logOut} >LogOut</button>
    </div>
  )
}
