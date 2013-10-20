<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Install extends CI_Controller {

	/* Creamos el constructor para la clase Welcome */

	public function __construct()
	{
		// Llamamos al constructor del controlador (CI_Controller)
		parent::__construct();
		// Cargamos la clase requerida
		$this->load->library('migration');

		$this->load->helper('url');
	}

	/* Metodo generico para la creacion de tablas */
	public function index()
	{
		// actualizamos la base de datos a la ultima version disponible
		if(!$this->migration->latest())
		{
			// si ocurre un problema:
			show_error($this->migration->error_string());
		}
		else
		{
			$data['msg'] = 'Database updated and ready to go!';
			$this->load->view('v_message', $data);
		}
	}

	public function reset()
	{
		// borramos todo
		$this->migration->version(0);

		// y nos vamos a la ultima migracion
		redirect('/Install', 'refresh');
	}


}