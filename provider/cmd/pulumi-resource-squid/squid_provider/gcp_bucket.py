import json
from typing import Optional

from pulumi import Inputs, ResourceOptions
from pulumi_gcp import storage
import pulumi


class GCPBucketArgs:

    name: pulumi.Input[str]
    location: pulumi.Input[str]

    @staticmethod
    def from_inputs(inputs: Inputs) -> "GCPBucketArgs":
        return GCPBucketArgs(name=inputs["name"], location=inputs["location"])

    def __init__(self, name: pulumi.Input[str], location: pulumi.Input[str]) -> None:
        self.name = name
        self.location = location


class GCPBucket(pulumi.ComponentResource):
    bucket: storage.Bucket

    def __init__(
        self,
        name: str,
        args: GCPBucketArgs,
        opts: Optional[ResourceOptions] = None,
    ) -> None:
        super().__init__("squid:index:GCPBucket", name, opts)

        bucket = storage.Bucket(
            f"{args.name}-bucket",
            location=args.location,
            opts=ResourceOptions(parent=self),
        )

        self.bucket = bucket
        self.register_outputs({"bucket": bucket})

    # gcp_bucket = GCPBucket(name, GCPBucketArgs.from_inputs(inputs), options)
