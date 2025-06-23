import React, {useState} from "react";
const Result = () => {

    const [studentId, setStudentId] = useState("");
      const [birthDate, setBirthDate] = useState("");
      const [result, setResult] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
    
      const fetchResult = async () => {
        setLoading(true);
        setError(null);
        setResult(null);
    
        const payload = new URLSearchParams();
        payload.append("action", "get-result");
        payload.append("student_id", studentId);
        if(birthDate){
          payload.append("birth_date", birthDate);
        }
    
        try {
          const response = await fetch("https://www.lus.ac.bd/wp-admin/admin-ajax.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: payload.toString(),
          });
    
          const data = await response.json(); 
          if (!data.success) {
            setError("This student is not registered to student portal. Please register first to view your results.");
           } else {
            setResult(data);
        }
          console.log(data);
          
        } catch (err) {
          setError("Failed to fetch result.");
          console.error(err);
        } finally {
          setLoading(false);
        }
    
      }
    
        const renderSemesterTable = (semester) => {
        return (
          <div key={semester.name} className="mt-8">
            <h3 className="text-xl font-semibold mb-4">{semester.name}</h3>
            <table className="w-full table-auto border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Course Code</th>
                  <th className="p-2 border">Course Title</th>
                  <th className="p-2 border">Credit</th>
                  <th className="p-2 border">GP</th>
                  <th className="p-2 border">Grade</th>
                </tr>
              </thead>
              <tbody>
                {semester.courses.map((course, index) => (
                  <tr key={index} className="text-sm text-center">
                    <td className="p-2 border">{course.course_code}</td>
                    <td className="p-2 border text-left">{course.course_title}</td>
                    <td className="p-2 border">{course.credit}</td>
                    <td className="p-2 border">{course.gpa}</td>
                    <td className="p-2 border">{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-2 text-sm font-medium">
              <span className="mr-4">Total Credit: {semester.credit}</span>
              <span className="mr-4">GPA: {semester.gpa}</span>
              <span>Grade: {semester.grade}</span>
            </div>
          </div>
        );
      };
    
        const renderResultsByYear = () => {
        if (!result?.results) return null;
    
        return Object.entries(result.results).map(([year, semesters]) => (
          <div key={year} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{year}</h2>
            {semesters.map((semester) => renderSemesterTable(semester))}
          </div>
        ));
      };

  return (
     <div className="max-w-4xl mx-auto p-6 bg-white text-black rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Result</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <button
        onClick={fetchResult}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Fetching..." : "Get Result"}
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {result && (
        <div className="mt-8">
          {/* Student Info */}
          <div className="mb-6 text-sm">
            <p><strong>Student ID:</strong> {result.student.id}</p>
            <p><strong>Semester:</strong> {result.student.semester}</p>
            <p><strong>CGPA:</strong> {result.student.cgpa}</p>
            <p><strong>Grade:</strong> {result.student.grade}</p>
            <p><strong>Credit Completed:</strong> {result.student.credit}</p>
            <p><strong>Name:</strong> {result.student.name}</p>
            <p><strong>Program:</strong> {result.student.degree}</p>
            <p><strong>Department:</strong> {result.student.department}</p>
          </div>

          {/* Semester Tables */}
          {birthDate && result.results && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Academic Results</h2>
              {renderResultsByYear()}
            </div>
          )}

          {birthDate && !result.results && (
            <p className="text-yellow-600 mt-4">No detailed results found. Please check if the birth date is correct.</p>
          )}
          
        </div>
      )}
    </div>
  )
}

export default Result