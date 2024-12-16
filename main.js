
const data = {
	"Setup": [{
		title: "Ver configuracion actual",
		command: "git config --list",
		description: "Muestra todas las propiedades configuradas en Git"
	}, {
		title: "Configurar nombre",
		command: "git config --global user.name \"UserName\"",
		description: "Git usa esta informacion de usuario en los commits"
	}, {
		title: "Configurar email",
		command: "git config --global user.email user@email.com",
		description: "Git usa esta informacion global en los commits"
	}],
	"Init repos": [{
		title: "Crear repositorio",
		command: "git init",
		description: "Inicializa un repositorio en el directorio actual"
	}, {
		title: "Clonar repositorio",
		command: "git clone [url]",
		description: "Descarga un repositorio en el directorio actual"
	}],
	"Snapshotting": [{
		title: "Agregar archivos",
		command: "git add [files]",
		description: "Agrega archivos al indice en el arbol de trabajo"
	}, {
		title: "Status",
		command: "git status",
		description: "Muestra los archivos en el indice que tienen diferencias en el arbol de trabajo"
	}, {
		title: "Diferencias de versiones",
		command: "git diff",
		description: "Muestra las modificaciones dentro de los archivos modificados en el arbol de trabajo"
	}, {
		title: "Registrar cambios",
		command: "git commit",
		description: "Registra un nuevo cambio en el repositorio"
	}, {
		title: "Restaurar archivos",
		command: "git restore",
		description: ""
	}, {
		title: "",
		command: "git reset",
		description: ""
	}, {
		title: "",
		command: "git rm",
		description: ""
	}, {
		title: "",
		command: "git mv",
		description: ""
	}],
	"Branch & Merge": [{
		title: "",
		command: "",
		description: ""
	}],
	"Share & Update": [{
		title: "",
		command: "",
		description: ""
	}],
	"Inspect & Compare": [{
		title: "",
		command: "",
		description: ""
	}],
}