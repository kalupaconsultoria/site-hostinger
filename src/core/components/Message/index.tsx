import { Button, Modal, ModalBody, ModalFooter, ModalHeader, modalTheme } from 'flowbite-react';
import styles from './styles.module.css';
import { useState } from 'react';
import { twMerge } from 'flowbite-react/helpers/tailwind-merge';

export function MpxMessage() {
	const [openModal, setOpenModal] = useState(true);
	return (
		<>
			<div className={twMerge(styles.messageContainer)}>
				<Button onClick={() => setOpenModal(true)} className='mpx-primary'>
					Toggle modal
				</Button>

				<Modal theme={modalTheme} show={openModal} onClose={() => setOpenModal(false)}>
					<ModalHeader>Terms of Service</ModalHeader>
					<ModalBody>
						<div className='space-y-6'>
							<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
								With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of
								service agreements to comply.
							</p>
							<p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
								The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European
								Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
							</p>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button onClick={() => setOpenModal(false)}>I accept</Button>
						<Button color='alternative' onClick={() => setOpenModal(false)}>
							Decline
						</Button>
					</ModalFooter>
				</Modal>
			</div>
			;
		</>
	);
}
