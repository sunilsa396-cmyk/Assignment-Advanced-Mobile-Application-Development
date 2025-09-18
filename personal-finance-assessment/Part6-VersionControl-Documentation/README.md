# Part 6 – Version Control & Documentation

This section demonstrates my approach to **Git version control**, **commit discipline**, and **documentation**.

---

##  Git Strategy
- **Feature Branching**: Each feature/part of the assignment is developed in its own branch (e.g., `feature/transactions`, `feature/charts`).
- **Commit Often**: Small, incremental commits for clarity.
- **Pull Requests (if in team)**: Peer review before merge.
- **Main Branch**: Always stable, contains only reviewed code.

---

## Sample Commit Messages

- `feat(transactions): add form validation for new entry`
- `feat(charts): integrate react-native-chart-kit for expense visualization`
- `fix(sync): retry failed API calls with exponential backoff`
- `test(rn): add Jest test for transaction addition`
- `perf(list): optimize FlatList rendering with keyExtractor`
- `docs: update architecture diagram in Part1`

---

## Documentation
- Each part of the assessment has its own **README.md** file.
- **main-README.md** in root acts as the entry point for navigation.
- Architecture diagrams and screenshots are embedded where needed.
- Known issues and improvements are documented transparently.

---

## Testing Instructions
- **React Native (Jest)** → Run `npm test` or `yarn test`
- **Kotlin (JUnit)** → Run tests with Android Studio / Gradle
- **Integration (Appium)** → Run with `appium test AddTransactionTest.java`

---

## Improvements
- Could integrate **Husky pre-commit hooks** (linting + tests before push).
- Add **CI/CD pipeline** (GitHub Actions) for automated tests.
- Include **Conventional Commits** for changelog generation.


