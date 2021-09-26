# calendar-vuejs
Simple calendar with VueJS and TailwindCSS

# **Run with Docker Compose**

After running all instances below:

Access to `localhost:8080`

### Requirements

- (`pwd` is at root project folder)

### 1. Run docker in `dev` enviroment

**Run in background**

```
cd canlendar-vuejs
docker-compose -f docker-compose-dev.yml up -d --build
```

To stop `docker-compose-dev.yml`

```
docker-compose -f docker-compose-dev.yml stop
```

**Run in foreground**

```
cd canlendar-vuejs
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up
```

To stop `docker-compose-dev.yml`

```
Ctrl + C
```

### 2. Run docker in `prod` enviroment

**Run in background**

```
cd canlendar-vuejs
docker-compose -f docker-compose-prod.yml up -d --build
```

To stop `docker-compose-prod.yml`

```
docker-compose -f docker-compose-prod.yml stop
```

**Run in foreground**

```
cd canlendar-vuejs
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml up
```

To stop `docker-compose-dev.yml`

```
Ctrl + C
```

# ERROR

- When error `/bin/sh: 1: vue-cli-service: not found` appears when starting docker. Try to `yarn install` in `frontend` folder, then start docker again.

# References

- Favicon: https://www.favicon.cc/?action=icon&file_id=448627
- You Don't Need Moment JS: https://github.com/you-dont-need/You-Dont-Need-Momentjs
- Template: https://tailwinduikit.com/components/webapp/calendar/calendar
- Event Card: https://tailwindcomponents.com/component/event-cards
- Dropdown: https://tailwindcomponents.com/component/dropdown-1