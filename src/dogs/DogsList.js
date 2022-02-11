import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useInfiniteScroller } from "../useInfiniteScroller";
import { DogItem } from "./DogItem";
import { fetchDogs } from "./fetchDogs";

export function DogsList() {
  const [dogs, setDogs] = useState([]);

  useInfiniteScroller({
    threshold: 0.1,
    onMore: () =>
      fetchDogs().then((moreDogs) => setDogs((dogs) => dogs.concat(moreDogs))),
  });

  useEffect(() => fetchDogs().then(setDogs), []);

  return (
    <ListGroup>
      {dogs.map((url) => (
        <DogItem url={url} key={url} />
      ))}
    </ListGroup>
  );
}
