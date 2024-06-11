ARG FROM_IMAGE
ARG FROM_VARIANT

FROM ${FROM_IMAGE}:${FROM_VARIANT}

# Install essential tools.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    make \
    apt-transport-https \
    ca-certificates \
    curl \
    git-all \
    locales \
    nano \
    python3 \
    python3-pip \
    sudo \
    vim \
    wget \
    && rm -rf /var/lib/apt/lists/* \
    && rm -Rf /usr/share/doc && rm -Rf /usr/share/man \
    && apt-get clean

USER ${USERNAME}

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt