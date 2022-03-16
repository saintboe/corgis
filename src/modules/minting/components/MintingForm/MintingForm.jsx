import React, { useContext, useEffect, useState } from 'react';

import './MintingForm.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom } from '@fortawesome/free-solid-svg-icons';

import { CharacterContext, ContractContext } from '~contexts';

import { Button, Colorpicker, Input, NearIcon } from '~modules/common';

import { genRandomColor, genRandomName } from '~helpers/generators';

import { CORGI_VALIDATION_MESSAGES } from '~constants/validation/corgi';

import { validateCorgiName } from '~validators';

const MintingForm = () => {
  const { createCorgi } = useContext(ContractContext);
  const { name, quote, color, backgroundColor, setName, setColor, setBackgroundColor } = useContext(CharacterContext);

  const [errorMessage, setErrorMessage] = useState('');

  const clearError = () => {
    setErrorMessage('');
  };

  const handleName = (event) => {
    //setName(event.target.value);
    setName('POP Card');
    clearError();
  };

  const generateRandomName = () => {
    //setName(genRandomName());
    setName('POP Card');
  };

  const handleColor = (newColor) => {
    setColor(newColor);
  };

  const handleBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  const generateRandomColor = () => {
    setColor(genRandomColor());
    setBackgroundColor(genRandomColor());
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const validationMessage = validateCorgiName(name);

    if (validationMessage === CORGI_VALIDATION_MESSAGES.SUCCESS) {
      createCorgi({ name, color, background_color: backgroundColor, quote });
    } else {
      setErrorMessage(validationMessage);
    }
  };

  useEffect(() => {
    clearError();
  }, [errorMessage]);

  return (
    <form className='minting-form' onSubmit={(event) => onSubmit(event)}>
      <div className='minting-form__area'>
        <div className='minting-form__header'>
          {/* <h3 className='minting-form__title'>My Corgi is called</h3> */}
          {/* <FontAwesomeIcon icon={faRandom} onClick={() => generateRandomName()} className='minting-form__icon' /> */}
        </div>

        {/* <Input
          type='text'
          value={name}
          onChange={handleName}
          //placeholder='Sweet Corgi'
          error={errorMessage}
          //autoFocus
          //required
          readonly
        /> */}
      </div>

      <div className='minting-form__area'>
        <div className='minting-form__header'>
          <h3 className='minting-form__title'>Mint a POP Card to know more POP</h3>
          {/* <FontAwesomeIcon icon={faRandom} onClick={() => generateRandomColor()} className='minting-form__icon' /> */}
        </div>

        <div className='minting-form__colorpickers'>
          {/* <div className='minting-form__colorpicker'>
            <Colorpicker title={'Corgi'} color={color} pickColor={handleColor} />
          </div>

          <div className='minting-form__colorpicker'>
            <Colorpicker title={'Background'} color={backgroundColor} pickColor={handleBackgroundColor} />
          </div> */}
        </div>
      </div>

      <div className='minting-form__area'>
        <Button>
          Mint POP Card
        </Button>
      </div>
    </form>
  );
};

export default MintingForm;
