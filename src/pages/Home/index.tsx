import Container from "@/components/Container";
import SelfInfo from "./components/SelfInfo";
import Divider from "@/components/Divider";

const HomePage = () => {
  return (
    <Container className="flex flex-col">
      <div className="my-[4rem]">
        <SelfInfo />
      </div>
      <Divider className="mb-[3rem]"/>
    </Container>
  );
};

export default HomePage;
