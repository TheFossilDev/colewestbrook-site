import { FaJava, FaReact } from "react-icons/fa";

interface TimelineEntrycardProps {

}


export default function TimelineEntryCard(props: TimelineEntrycardProps) {
  
  return <div>
    <div>
      {/* 1/3 Media Card */}
    </div>
    <div>
      {/* 2/3 Info Card */}
      <h1>Project title</h1>
      <p>Project Description</p>
      <div className="flex items-center min-h-4">
        <FaJava />
        <FaReact />
      </div>
    </div>
  </div>
}