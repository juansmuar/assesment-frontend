import './styles.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Timer = (props) => {
  const maxTime = 180;
  const minTime = 30;
  const Ref = useRef(null);
  const { id } = props;

  const [timer, setTimer] = useState('00:00:00');
  const [active, setActive] = useState(true);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total, hours, minutes, seconds,
    };
  };

  const startTimer = (e) => {
    const {
      total, hours, minutes, seconds,
    } = getTimeRemaining(e);
    if (total === 0) {
      setActive(false);
    }
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : `0${hours}`}:${
          minutes > 9 ? minutes : `0${minutes}`}:${
          seconds > 9 ? seconds : `0${seconds}`}`,
      );
    }
  };

  const clearTimer = (e) => {
    setTimer('00:00:00');

    if (Ref.current) clearInterval(Ref.current);
    const idt = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = idt;
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + Math.floor(Math.random()
    * (maxTime - minTime) + minTime));
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="timer__container">
      <h2>{timer}</h2>
      <Link style={{ pointerEvents: active ? '' : 'none' }} to={`/detalle/${id}`} className="card__link">
        <button className="timer__button" type="button">Go to detail</button>
      </Link>
    </div>
  );
};

Timer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Timer;
