const Header = (props) => {
  console.log("Header: " ,props)
  return (
    <div>
      <h1>
        You are on the course {props.course}
      </h1>   
    </div>
  )
}

const Content = (props) => {
  console.log("Content: " ,props)
  return (
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </div>
  )
}

const Part = (props) => {
  console.log("Part: " ,props)
  return (
    <div>
      <p>
        Part: {props.parts.name}
        <br/>
        Completed Exercises: {props.parts.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log("Total: " ,props)
  return (
    <div>
      <h2>
        Your Total is {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </h2>   
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course={course['name']} />
      <Content parts = {course['parts']}/>
      <Total parts = {course['parts']} />
    </>
  )

}

export default App
