# APP ERP

## Setup

##### Docker

Set up .env file
> cp .env.example .env

**Important! Change the DB parameters in the .env file before build the containers**

### Configuring A Bash Alias
However, instead of repeatedly typing vendor/bin/sail to execute Sail commands, you may wish to configure a Bash alias that allows you to execute Sail's commands more easily:

>alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'
>

### Executing Commands and Executing Artisan Commands
Laravel Artisan commands may be executed using the artisan command:
> sail artisan queue:work
>
> sail php script.php
>
> sail composer require laravel/sanctum
>
> sail node --version
>
> sail npm run prod


## Container CLI
Sometimes you may wish to start a Bash session within your application's container. You may use the shell command to connect to your application's container, allowing you to inspect its files and installed services as well execute arbitrary shell commands within the container:
>sail shell
>
>sail root-shell
# License

The Lumen framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
