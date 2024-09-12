# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-09-12)

<section class="features">

### Features

-   [`97bba2a`](https://github.com/stdlib-js/stdlib/commit/97bba2a07bb5ca413ec1e92100174753edb2e858) - add support for stacks in `blas/sdot` [(#2895)](https://github.com/stdlib-js/stdlib/pull/2895)
-   [`0eaf8b6`](https://github.com/stdlib-js/stdlib/commit/0eaf8b6263017bfe14c1b8769dfd885a19d1778e) - add support for operating on stacks of vectors

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`97bba2a`](https://github.com/stdlib-js/stdlib/commit/97bba2a07bb5ca413ec1e92100174753edb2e858): return an ndarray, rather than a scalar

    -   This commit changes the return value from a scalar to an ndarray. Previously, the function only operated on one-dimensional ndarrays and returned a scalar value. Now, the function operates on ndarrays of arbitrary rank and always returns an ndarray. In order to migrate, for one-dimensional input ndarrays, users should call `out.get()` in order to retrieve the scalar dot product.

-   [`0eaf8b6`](https://github.com/stdlib-js/stdlib/commit/0eaf8b6263017bfe14c1b8769dfd885a19d1778e): return an ndarray, rather than a scalar

    -   To migrate, users should invoke the `#.get()` method to retrieve the scalar
        value from the returned zero-dimensional ndarray.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`97bba2a`](https://github.com/stdlib-js/stdlib/commit/97bba2a07bb5ca413ec1e92100174753edb2e858) - **feat:** add support for stacks in `blas/sdot` [(#2895)](https://github.com/stdlib-js/stdlib/pull/2895) _(by Aman Bhansali, Athan Reines)_
-   [`b789714`](https://github.com/stdlib-js/stdlib/commit/b789714438d74aef087fed6d949a7124b302940d) - **docs:** fix definition _(by Athan Reines)_
-   [`1d666a6`](https://github.com/stdlib-js/stdlib/commit/1d666a61937d44d9c47e4b38c736f50b1666607e) - **docs:** fix parameter annotation _(by Athan Reines)_
-   [`0eaf8b6`](https://github.com/stdlib-js/stdlib/commit/0eaf8b6263017bfe14c1b8769dfd885a19d1778e) - **feat:** add support for operating on stacks of vectors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Aman Bhansali
-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="features">

### Features

-   [`934e2fc`](https://github.com/stdlib-js/stdlib/commit/934e2fc047e32580441a72273a04d96dacbb3c29) - improve type specificity

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`934e2fc`](https://github.com/stdlib-js/stdlib/commit/934e2fc047e32580441a72273a04d96dacbb3c29) - **feat:** improve type specificity _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`a9f7c78`](https://github.com/stdlib-js/stdlib/commit/a9f7c78cf0414fd5b48418008de73910e71ec02e) - **docs:** render equations via math code blocks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

