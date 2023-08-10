import { useBlockProps } from '@wordpress/block-editor';
import classes from classes


export default function Save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Boilerplate - hello from the saved content!' }
		</p>
	);
}
