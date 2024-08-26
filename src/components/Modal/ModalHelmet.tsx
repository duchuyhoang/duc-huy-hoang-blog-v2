"use client";

import React, { useContext, useState } from "react";
import SignInModal from "./SignInModal";

export enum MODAL_KEYS {
  SIGN_IN = "SIGN_IN",
}

interface ModelState {
  key: MODAL_KEYS;
  props: any;
}

const ModalHelmetContext = React.createContext<{
  states: Array<ModelState>;
  closeModal: (key: MODAL_KEYS) => void;
  openModal: (modalKey: MODAL_KEYS, props?: Record<string, any>) => void;
}>({
  states: [],
  closeModal: (key) => {},
  openModal: (key, props) => {},
});

export const ModalHelmetWrapper = ({ children }: React.PropsWithChildren) => {
  const [modalStates, setModalStates] = useState<Array<ModelState>>([]);

  const close = (modalKey: MODAL_KEYS) => {
    const newStates = [...modalStates];

    const index = modalStates.findIndex((state) => state.key === modalKey);
    if (index !== -1) {
      newStates.splice(index, 1);
      setModalStates(newStates);
    }
  };

  const open = (modalKey: MODAL_KEYS, props?: Record<string, any>) => {
    const newStates = [...modalStates];
    const index = modalStates.findIndex((state) => state.key === modalKey);
    if (index !== -1) {
      newStates[index].props = props;
      setModalStates(newStates);
    } else {
      setModalStates([
        ...newStates,
        {
          key: modalKey,
          props,
        },
      ]);
    }
  };

  return (
    <ModalHelmetContext.Provider
      value={{
        states: modalStates,
        closeModal: close,
        openModal: open,
      }}
    >
      {children}
      {modalStates.map((state) => {
        return (
          <>
            {state.key === MODAL_KEYS.SIGN_IN && (
              <SignInModal
                open
                onClose={(open) => {
                  close(MODAL_KEYS.SIGN_IN);
                }}
                center
                {...state.props}
              />
            )}
          </>
        );
      })}
    </ModalHelmetContext.Provider>
  );
};

export const useModal = () => useContext(ModalHelmetContext);
