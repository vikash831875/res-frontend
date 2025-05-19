import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { useNavigate, Link } from 'react-router-dom'; // Also import Link if you're using it

const Success = () => {
  const [countdown, setCountdown] = useState(10); // Corrected here
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [navigate]);

  return (
    <>
      <section className='notFound'>
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to Home in {countdown} seconds...</h1>
          <Link to='/'>
            Back to Home <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Success;
