import Button from "./Button"

const Home = () => {
    const button = [
        "All","Gaming","Music","Sports","Movies","Software","Cyber",
        "All","Gaming","Music","Sports","Movies",
    ]

    return (
        <div>
        <div className="flex space-x-6 items-center">
          {button.map((btn, index) => {
            return (
              <Button
                key={index}
                name={btn}
                className=""
              />
            );
          })}
        </div>
      </div>
    )
}
export default Home;