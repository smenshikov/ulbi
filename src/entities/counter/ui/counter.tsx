import React, { FC } from 'react';
import { Button } from 'shared/ui/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const handleIncrease = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrease = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h2>
        {counterValue}
      </h2>
      <Button onClick={handleIncrease}>
        +
      </Button>
      <Button onClick={handleDecrease}>
        -
      </Button>
    </div>
  );
};
