import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import { Modal } from '../../lib/components';
import { IModalRef } from '../../lib/components/Modal/Modal';
import { TITLE_PREFIX } from '../helper/constant';

Modal.displayName = "Modal";

export default {
    title: `${TITLE_PREFIX}/Modal`,
    component: Modal,
    argTypes: {},
} as ComponentMeta<typeof Modal>;

export const Primary: ComponentStory<typeof Modal> = (args) => {
    const modalRef = useRef<IModalRef>(null);
    return <Modal ref={modalRef}>Child</Modal>
};