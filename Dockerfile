FROM envoyproxy/envoy-alpine:1.13.0
COPY envoy.yaml /etc/envoy.yaml
CMD /usr/local/bin/envoy -c /etc/envoy.yaml
