import { useState } from "react";
import styled from "styled-components";
import people from "../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "./Heading";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <Container className="review">
    <Heading />
        <img src={image} alt={name}  />
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 340px;
  height: 500px;
  background-color: #f0f0f0;
  box-shadow: 1px 1px 10px #575757;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-top: 100px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  h4 {
    margin: 20px 0 10px 0;
    font-size: 16px;
  }
  .job {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #15828b;
  }
  .info {
    font-size: 15px;
    line-height: 22px;
    color: #353030;
    width: 320px;
    text-align: center;
    margin: 10px;
  }
  .button-container {
    margin-bottom: 10px;
  }
  .prev-btn , .next-btn {
     color: #15828b;
  }
  .random-btn {
    padding: 8px;
    color: #b1aeae;
    background-color: #184146;
    border: none;
  }
`;
