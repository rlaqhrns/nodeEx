const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
        window.location.hostname === '[::1]' ||
            window.location.hostname.match(
                /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
);

export function register(config) {
    if(process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if(publicUrl.origin !== window.location.origin) {
            return;
        }

        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    
            if (isLocalhost) {
                checkValidServiceWorker(swUrl, config);
    
                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        "해당 웹 애플리케이션은 서비스에서 캐시를 우선적으로 제공한다." + 
                        "자세한 내용은 https://bit.ly/CRA-PWA를 방문하십시오."
                    );
                });
            } else {
    
                registerValidSW(swUrl, config);
            }
        });
    }
}

function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if(installingWorker == null) {
                    return;
                }
                installingWorker.onstatechange = () => {
                    if(installingWorker.state === 'installed') {
                        if(navigator.serviceWorker.controller) {
                            console.log(
                                "새 콘텐츠를 사용할 수 있으며 모든 페이지의" + 
                                "탭이 닫혔습니다. http://bit.ly/CRA-PWA를 참조하십시오"
                            );
                        }

                        //콜백 실행
                        if(config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    } else {
                        console.log("콘텐츠는 오프라인 사용을 위해 캐시된다.");

                        //콜백 실행
                        if(config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        })
        .catch(error => {
            console.error("서비스 워커 등록중 오류가 발생했습니다 : ", error);
        });
}

function checkValidServiceWorker(swUrl, config) {

    fetch(swUrl, {
        headers: {'Service-Worker': 'script'},
    })
    .then(response => {
        const contentType = response.headers.get('content-type');
        if(
            response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1) 
        ) {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        } else {
            registerValidSW(swUrl, config);
        }
    })
    .catch(() => {
        console.log(
            "인터넷 연결이 없습니다. 앱이 오프라인 모드에서 실행중 입니다."
        );
    });
}

export function unregister() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
        .then(registration => {
            registration.unregister();
        })
        .catch(error => {
            console.error(error.message);
        });
    }
}