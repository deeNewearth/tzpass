import { Card, Container, Image, Button } from "react-bootstrap";
import dj_img from "./timg_square.jpeg";

const cardDescription = {
  title: "DJ Teo",
  subtitle: "book a one on one",
  action: "book meeting",
  details: [
    "Book a 1 on 1 meeting twice a month (in person or virtual)",
    "Meetings last up to 3 hours",
    "Unused meetings don’t cary over to next month (use it or lose it)",
  ],
};

export default function ListOfTiles() {
  const tiles = [...Array(5)].map((_, k) => ({ k }));
  return (
    <Container>
      I am list of tiles 1.0
      <div>
        {tiles.map((t, i) => (
          <Card key={i} className="my-2">
            <Card.Title>
              <div className="p-2 d-flex d-flex flex-row gap-2 align-items-center">
                <div style={{ height: "3rem", width: "3rem" }}>
                  <Image src={dj_img} fluid roundedCircle thumbnail />
                </div>
                <div>{cardDescription.title}</div>
              </div>
            </Card.Title>
            <Card.Subtitle className="px-2">
              {cardDescription.subtitle}
            </Card.Subtitle>
            <Card.Body>
                <ul>
                    {cardDescription.details.map( (d,di)=><li key={di}>{d}</li>)}
                </ul>

                <div className="text-center">
                    <Button variant="primary">{cardDescription.action}</Button>
                </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
