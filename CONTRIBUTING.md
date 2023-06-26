# How to become a contributor

✔️ You agree to the [Contributor License Agreements](https://www.contributor-covenant.org)

✔️ Make sure your code adheres to the existing style, technologies, and coding standards recommended for this project.

### Did you find a bug? / Do you want to suggest something?

- Ensure the bug was not already reported by searching on [Issues](https://github.com/EpitechMscProPromo2025/T-YEP-600-NAN-6-1-finalproject-ange.marchand/issues).  
  Otherwise, create an new one. Be sure to include a **clear title and description**, as much relevant information as possible, and a **sample code** or **executable test case** demonstrating the expected behavior that does not not occur.

- Use issue creation templates

### **Do you want to create a branch?**

- Your branch name should be formatted as `fix/<ISSUENUMBER>-<TITLE>` for bug fixes or `feature/<ISSUENUMBER>-<TITLE>` for features.  
  Example:  
  `fix/4221-infinite-loop`  
  `feature/4222-deployement`  
  `doc/4223-RGPD`

### **Do you want to fix an issue?**

- Create a new branch following the above convention
- Implement your features of fixes in it.

### **How to title commits?**

- Commit often!

- Follow [the guidelines](https://cbea.ms/git-commit/)

- Use imperative tense (avoid past tense).

- The title of the commit must be a summuary of the content and not be too long (less than 50 characters).

- Prefer putting detailed informations inside the commit's description.

  ```sh
  Example:

  $> git commit -m 'Fix: infinite loop when pressing Alt-F4

  This was caused by a missing check in the event loop
  The program now checks when the window is set to close'
  ```

- Defines the type of commit

  - **build:** Build system (example: gulp, webpack, npm)
  - **ci:** Continuous integration (github action)
  - **doc:** Documentation
  - **feat:** Added a feature
  - **hotfix:** Bug fix
  - **perf:** performance improvement
  - **refactor:** Code changes that doesn't change how it works
  - **style:** Changing the style of the code (without changing the logic)
  - **test:** Editing tests

### How to submit a pull request?

- Format your code using Pretier

```sh
yarn run format
yarn run lint
```

- Make sure your code has a proper set of unit tests that all pass

```sh
yarn run test:unit
```

- Once validated, merge to PR to `main` and remove the source branch (with `git branch -D <branch_name>`.

---

[![License](https://img.shields.io/github/license/rails/rails)](https://github.com/rails/rails)

THANKS! 💚

VirtuozPlay team
