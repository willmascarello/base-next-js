import { ComponentToUse } from "../components/ComponentToUse";
// This is the main and start page of the App


export default function Home() {
  return (
    <div className="container">
      <h1>This is the Home Page</h1>
      <ComponentToUse />
    </div>
  )
}
