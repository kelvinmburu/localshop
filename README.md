# Localshop
An inventory app that can help in stock taking, generation and visualization of weekly, monthly and annual reports.
The app uses Angular (for front-end) and Django(back-end)

## Project Run-Through
* A few details about this project:

![GitHub Repo Size](https://img.shields.io/github/repo-size/kelvinmburu/localshop)
![Lines of Code](https://img.shields.io/tokei/lines/github/kelvinmburu/localshop)
![GitHub License](https://img.shields.io/github/license/kelvinmburu/localshop)
![GitHub Top Language](https://img.shields.io/github/languages/top/kelvinmburu/localshop)
![GitHub Language Count](https://img.shields.io/github/languages/count/kelvinmburu/localshop)
![GitHub Commit Activity](https://img.shields.io/github/commit-activity/w/kelvinmburu/localshop)
![GitHub Contributors](https://img.shields.io/github/contributors/kelvinmburu/localshop)

## Contribution
- [Lona Wanjiku](https://github.com/Lorna-Mwaura) 📖
- [Joy Christine](https://github.com/JoyChristine) 📖
- [Robert Kirui](https://github.com/Kirugik) 📖
- [Maureen Ndiema](https://github.com/maureenndiema) 📖
- [Kelvin Mburu](https://github.com/kelvinmburu) 📖

## Technology Used

1. Python
2. [Django version 4](https://docs.djangoproject.com/en/4.0/)
3. HTML, CSS and JavaScript
4. Pip
5. Bootstrap CSS Framework
6. Angular

## Project Requirements & Prerequisites

1. IDE of Choice
2. Python3
3. Browser

* Please ensure you're working from a Windows/MacOS/Linux
* Install Django through `pip install django`

## Project Setup and Installation

### Part 1 - Django(Server)

1. Proceed to this [link](https://github.com/kelvinmburu/localshop.git) and clone the repository.
2. Extract the folder and `cd` to the folder on your terminal or your prefered IDE
3. In the terminal, create a virtual environment: `python3 -m venv virtual` and activate it through `source virtual/bin/activate`. In the case of any name, please use `source <name>/bin/activate` or refer to this [documentation](https://stackoverflow.com/questions/31252791/flask-importerror-no-module-named-flask) for Flask virtual environment installation.
4. Install all dependencies from the `requirements.txt` file; use `pip install -r requirements.txt` to install needed dependencies.
6. In the terminal, and within the project folder, run `python manage.py runserver` to start the project.
7. View the application on your browser on `http://127.0.0.1:8000`. If you have another project running on another port, use `venv run --host 0.0.0.0 --port 8001` to switch to a new port; You can use a different port number.

### Part 2 - Angular(Client)
* After cloning the repository, cd into `front-end/localshop`
* Run `npm install` to re-install all Angular dependencies to the node modules
* Ensure you're using Angular CLI version 14.0.4 and above. See [more here](https://angular.io/cli/update) on updating Angular CLI
* After installing the dependencies, run `ng serve` and proceed to `http://localhost:4200` to view the platform.
* To view functionality, open a new instance in your terminal and `cd` into `backend`.
* Next, activate your virtual environment and activate the Django server through `python manage.py runserver'

## Behavior Driven Development (BDD)

The BDD focuses on how a user interacts with the application.

At a minimum, this is what the user should experience in the application:
* User registration - Admin/Clerk
* Take stocktake of projects
* Take stocktake of defective goods
* View all the stores in the application
* View real-time reports generations as graphs


## Project Contribution or Development:

To contribute to this project, please follow the following steps:
* Fork the repository.
* Create a branch: `git checkout -b <branch_name>`.
* Make your changes and commit them: `git add .` && `git commit -m '<commit_message>'` && `git push origin <branch_name>`
* Push to the original branch: `git push origin <branch_name>`
* Create the pull request.
* Once a PR is reviewed, the changes will be pushed to the main branch for integration.

Please see the GitHub documentation on [Creating a Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

## Known Issues & bugs
* Angular deployment
* Full Front-end to Back-end communication

To improve this project or fix a bug, please reach me via Email:
* [mburuhkelvin@gmail.com](mailto:mburuhkelvin@gmail.com)


Alternatively, you can contact me via [LinkedIn](https://www.linkedin.com/in/kelvin-m-560a25135/)


## License

Please view the project [LICENSE](LICENSE) for more information.

