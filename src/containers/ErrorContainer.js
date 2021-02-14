import React, { useState, useEffect } from 'react';
import { Error } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../redux/actions';

export default function ErrorContainer() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error.error) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [error]);

  return (
    <Error
      style={
        showError
          ? { transform: 'translateX(0%)' }
          : { transform: 'translateX(100%)' }
      }
    >
      <Error.Inner>
        <Error.Close onClick={() => dispatch(clearError())} />
        <Error.Text>{error.error}</Error.Text>
      </Error.Inner>
    </Error>
  );
}
