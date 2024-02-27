import { fileUpload } from "../../src/helpers/fileUpload";
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'dfwzuilce',
    api_key: '295977515365443',
    api_secret: 'yybh6MWH-PMk023jmpphNf33nnI',
    secure: true
});


describe('Pruebas en fileUpload', () => {
    
    test('Debe de subir el archivo correctamente a cloudinary', async() => {
        
        const imageUrl = 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect(typeof url).toBe('string');
        
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        
        await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });

    });

    test('debe de retornar null', async() => {
        
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect(url).toBe(null);
    });

    
});