import type { MorphusProps } from '@core/types/morphus.type';

export type SecNavbarProps = {} & MorphusProps;

export function SecNavbar({ children }: SecNavbarProps) {
	return (
		<div className='security-navbar shadow-lg shadow-black/50 border-b border-b-gray-300'>
			<label className='title flex-auto flex mpx-h4 m-light'>Teste de Titulo</label>
			<div className='flex-auto content'></div>
			<div className='end'>{children}</div>
		</div>
	);
}
