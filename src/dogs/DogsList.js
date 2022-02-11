import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useInfiniteScroller } from "../useInfiniteScroller";
import { DogItem } from "./DogItem";
import { fetchDogs } from "./fetchDogs";

const PAGE_SIZE = 4;

export function DogsList() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => fetchDogs(PAGE_SIZE).then(setDogs), []);

  useInfiniteScroller({
    threshold: 0.1,
    onMore: () =>
      fetchDogs(PAGE_SIZE).then((moreDogs) =>
        setDogs((dogs) => dogs.concat(moreDogs))
      ),
  });

  return (
    <ListGroup>
      {dogs.map((url) => (
        <DogItem url={url} key={url} />
      ))}
    </ListGroup>
  );
}
