// Llamamos al Router de Express
const router = require('express').Router();

// Llamamos a las funciones
const {
        createDino,
        getDino,
        getDinos,
        getDinoNames,
        getDinoRandom,
        getDinoByLetter,
        updateDino,
        deleteDino
}= require('../controllers/dinos')

const auth = require('../config/auth')

// Para crear un Dino
router.post('/', [auth.isMember || auth.isAdmin], createDino);
/**
 * @swagger
 * /dinos:
 *     post:
 *       summary: Crear dinosaurio
 *       description: Agregar nuevo dinosaurio
 *       operationId: createDino
 *       consumes:
 *       - application/json
 *       produces:
 *       - application/json
 *       parameters: 
 *       - in: body
 *         name: body
 *         description: Objeto que contiene al dinosaurio que sera agregado
 *         required: true
 *         schema:
 *           $ref: '#/definitions/dino'
 *       responses:
 *         201:
 *           description: Creado correctamente
 *           type: json
 */ 

// Para obtener todos los Dinos
router.get('/', getDinos);
/**
 * @openapi
 * /dinos:
 *     get:
 *       summary: Listado de dinosauros
 *       description: Entrega la lista completa de los dinosaurios disponibles
 *       operationId: getDinos
 *       responses:
 *          200:
 *           description: Todos los dinosauros disponibles
 *           type: json
 */

/// FALTA DOC DE ESTOS DOS ///
router.get('/aleatorio/', getDinoRandom);
router.get('/dinos/nombre/:name', getDinoNames);
router.get('/dinos/letras/:name', getDinoByLetter);

/// Obtener dinosaurio por ID ///
router.get('/dinos/id/:id', getDino)
/**
 * @openapi
 * /dinos/{id}:
 *     get:
 *       summary: Obtener un dinosaurio por ID
 *       description: Entrega un único dinosaurio por ID
 *       operationId: getDino
 *       produces:
 *       - application/json
 *       parameters: 
 *       - name: id
 *         in: path
 *         description: ID de dinosaurio a retornar
 *         required: true
 *         type: integer
 *         format: int64
 *       responses:
 *         200:
 *           description: Dinosaurio encontrado por ID
 *           schema:
 *             type: array
 *             items: 
 *               $ref: '#/definitions/dino'
 *         400:
 *           description: ID proporcionado invalido
 *         404:
 *           description: Dinosaurio no encontrado     
 */


/// Para actualizar un dinosaurio ///
router.patch('/:id', auth.isAdmin, updateDino);
/**
 * @openapi
 * /dinos/{id}:
 *     patch:
 *       summary: Actualizar dinosaurio
 *       description: Actualizar algun parametro del dinosaurio
 *       operationId: actualizarDino
 *       consumes: application/json
 *       produces: application/json
 *       parameters: 
 *       - in: body
 *         name: body
 *         description: Objeto con contenido del campo que se actualizara 
 *         required: true
 *         schema: 
 *           $ref: '#/definitions/dino'
 *       - name: id
 *         in: path
 *         description: Id del dinosaurio que se actualizara
 *         required: true
 *         type: integer
 *         format: int64
 *       responses:
 *         200:
 *           description: Dinosaurio actualizado
 *           type: json
 *         400: 
 *           description: ID invalido
 *         404:
 *           description: dinosaurio no encontrado
 */

/// Para eliminar un dinosaurio ///
router.delete('/:id', auth.isAdmin, deleteDino);
/**
 * @openapi
 * /dinos/{id}:
 *     delete:
 *       summary: Borrar dinosaurio
 *       description: Eliminar dinosaurio seleccionado por ID
 *       operationId: deleteDino
 *       produces: 
 *       - application/json
 *       parameters:
 *       - name: id
 *         in: path
 *         description: Id del dinosaurio a eliminar
 *         required: true
 *         type: integer
 *         format: int64
 *       responses:
 *         200:
 *           description: Objeto vacio
 *           type: json
 *         400:
 *           description: ID proporcionadio invalido
 *         404: 
 *           description: Dinosaurio no encontrado
 */


/// Ejemplo de cómo se obtiene a un dinosaurio ///
/**
 * @openapi
 *definitions: 
 *  dino:
 *    type: object
 *    properties: 
 *      name: 
 *        type: string
 *        example: Abrictosaurus
 *      habitat:
 *        type: string
 *        example: Bosques del sur de Africa
 *      historicalPeriod:
 *        type: string
 *        example: Inicio del Jurasico
 *      sizeAndWeight:
 *        type: string
 *        example: 4 pies de largo y 120 libras
 *      diet:
 *        type: string
 *        example: plantas
 *      characteristics:
 *        type: string
 *        example: Pequeno con pico y dientes
 *      description:
 *        type: string
 *        example: Las marcas de sus dientes lo permiten identificar
 *      image:
 *        type: string
 *    xml:
 *      name: dino
 */


module.exports = router;