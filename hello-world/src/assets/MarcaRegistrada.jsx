import * as React from 'react'
const MarcaRegistrada = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={21}
        height={21}
        fill="none"
        {...props}
    >
        <path fill="url(#a)" d="M0 0h21v21H0z" />
        <defs>
            <pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#b" transform="scale(.0125)" />
            </pattern>
            <image
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABLRJREFUeNrsXItt2zAQlYUOoA3qTBB2AqsTVJ2gzgRxJ2gyQdIJ5Exgb2BnAikT2J1A3kAl0TMQpObxd4xOCg8gBPhDHR/vjvchmWWJEiUaMc24MNL3vZCPQrbz8xKdZGvVczabtR8WQAmWAqiSbQGACc+uWmjPsm0lqKfJiroCTbalbE0fjxp4RzEl4Oay1f37k3rnfOzA7frhaTcqIEFV654f1TFUe0YMnloYamQVtaHzSnuJBEHfN3Kx2U5F6jr430q20uF9Jfynhj5YSKO3/+a4sp5BE8Q8uILZUPIQwrgt04fYLsYrV+ngMJliKPCWluCp36wG4G/lwN9yCPBsaDOkrQGJ3FjyuuSkth2syFzsdGXJs+AAXsPRcQXHvhkMRFCHxgI8tnHooGOw8PPqEUVLZGOZ2doQ+dggP9lL7/6rj1rJx1ndTY70OQ+4JwKxMaTRvpNELCD2XajIgw16gOD+EBjXNtBXGVGdOxJVNoh7Z7tgQPgVgw6+LghMahfNLMELMKoc+ooFYFBoBi4ORvMQALF83saxr9gAejvEBmd757WIAPIHJC105VKDAHt1iZmjbE+adNbrReZzZl8/USmrtYs9hLHqbJ4a65HS9q08Zrn0mWHPhEHnqnoQO9PYQmBSa7Q9zQEJgG/6vKNcAAyTUrh0tKQOumMAaCE5hWNfNONG/CNv3ygWgAbJqTw0T+fWNJf+k2sMqs5Qcy1e/9Z87uTWwNh00Ye4JDz5hR9WHowOTZTbPJ6Q7yobABc614XLfpSYBLG2TssWNgBq1ZfxuKnTT1tbk+AC4AtjABfEqv3iBaAhlmSpvmDYdS6Gb+qrRd4nMAksDLaBI+l2Qqx9PQbDWAsMQIHEvtwkbw4+pM5ruA98xclGjW0lsOWirpB+qiH4L5FkwjHwda2NBH5igIuwjEZsNxY9umRiQokDgEVmrofYqty777zKJ+L/Kom7GmLb2lQA/DNUjD4VAH8NVZfOfZZuYlI1ZZSUeir7lv1L/+tI5fIeKBc3Z5cOK/wQuCBUKf07qkqh4T06Kn0kMAspYhNnS+5AGnX0EFoQN4z1pAXQkK4SXAwe+HmPmq/nsq0iqe9/GOUOHvg1p1VDDuQnYhNvA7u/to1OXACsMn6kU+Ui0BZWIQA+I0wJZlK4Ryb8h6f9q5CQ8dkGQMybv2Uohbo6je+i9w35bms7C6Mpaxo2AZQefYWVNQ2zWnCzhYZSpKsUYur7m2pWD5wkEPpeEjnpzls7cmRW1zo/a4iDM6ZwMFQCYUxzXbbHOVlh2FzZeew7iSaBBukRgbYP3WSZI7bliMysAq8eiRTauF7YEd09Vh4wpbOwmLPidBop09dyry38vsoTAxxAQH6NzRyjU0mtqwQC75gmrYOLU4THHGLbQJ3n0CG/Dz7mYCwqqdVHdqTEeIPMsALhi6ErNZP3ms9J/EHJp0steGewjzekZYJ01ItGRdJhw0AG0nHXdwIxHbj2jD3TkX9HEKdy6UQ11AxzvPZkNYprT96A6HPxTkls48Z38c6bmf+QVz+ly8eYOqsf5vq72I5ruoCRCMh0BSiRak/uEtp0DfIYAdT5k9kIL+JOlCjRqOmvAAMAZ9HEXWfagyYAAAAASUVORK5CYII="
                id="b"
                width={80}
                height={80}
            />
        </defs>
    </svg>
)
export default MarcaRegistrada
