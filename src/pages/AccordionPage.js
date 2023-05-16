import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "123213",
      label: "Can I Use React",
      content: "yes you can",
    },
    {
      id: "2323",
      label: "Can I Use JS",
      content: "yes you can",
    },
    {
      id: "14141",
      label: "Can I Use Java",
      content: "yes you can",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
