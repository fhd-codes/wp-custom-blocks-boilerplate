import { useBlockProps } from '@wordpress/block-editor';
import classnames from classnames


export default function Save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Boilerplate - hello from the saved content!' }
		</p>
	);
}
