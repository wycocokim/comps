import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoCloudDownload />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCloudDownload /> See Deal
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
